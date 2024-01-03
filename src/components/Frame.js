import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom'

export default function Frame({ url, minHeight = '300px' }) {
  const { siteConfig } = useDocusaurusContext()

  const [src, setSrc] = useState('')
  
  const getFigmaSvgUrl = (source => {
    const sourceURL = new URL(source);
    if (sourceURL.hostname.match(/figma\.com$/)) {
      const file = sourceURL.pathname.split('/')[2];
      const id = sourceURL.searchParams.get('node-id').replace('-', ':');
      const apiURL = new URL(`https://api.figma.com/v1/images/${file}?ids=${id}&format=svg`);
      return fetch(apiURL.href, {headers: {'X-Figma-Token': siteConfig.customFields.figmaToken}})
        .then(e => e.json())
        .then(e => e.images[id])
        .catch(e => console.log({ e }))
    }
    return source;
  })
  
  useEffect(() => {
    getFigmaSvgUrl(url).then((figmaUrl) => {
      setSrc(figmaUrl)
    })
  }, [])

  return (
    <Zoom>
      <div style={{ backgroundColor, minHeight, borderRadius }}>
        <img src={src} style={{ minHeight, borderRadius }} />
      </div>
    </Zoom>
  );
}

const backgroundColor = '#F7F7F4'
const borderRadius = '7px'
