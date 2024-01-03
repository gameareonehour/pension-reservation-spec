/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      collapsed: true,
      label: '画面定義/機能要件',
      items: [
        'ui/flow',
        'ui/001.001.1.reservation-top',
        'ui/001.002.1.room-catalog',
        'ui/001.002.2.room-catalog-details',
        'ui/001.003.1.vacancy-search',
        'ui/001.003.2.vacancy-select',
        'ui/001.003.3.reservation',
        'ui/001.003.4.reservation-confirmation',
        'ui/001.003.5.reservation-complete',
      ]
    },
    {
      type: 'category',
      label: 'システム設計',
      items: [
        'system/infrastructure',
      ]
    }
  ],
};

module.exports = sidebars;
