import type { Schema, Attribute } from '@strapi/strapi';

export interface PageLayout1 extends Schema.Component {
  collectionName: 'components_page_layout_1s';
  info: {
    displayName: 'Layout 1';
  };
  attributes: {
    SmallImage: Attribute.Media & Attribute.Required;
    LargeImage: Attribute.Media & Attribute.Required;
    Copy: Attribute.RichText;
  };
}

export interface PageLayout2 extends Schema.Component {
  collectionName: 'components_page_layout_2s';
  info: {
    displayName: 'Layout 2';
    description: '';
  };
  attributes: {
    LargeImage: Attribute.Media & Attribute.Required;
    SmallImages: Attribute.Media & Attribute.Required;
    Copy: Attribute.RichText & Attribute.Required;
    SmallCopy: Attribute.String;
  };
}

export interface PageLayout3 extends Schema.Component {
  collectionName: 'components_page_layout_3s';
  info: {
    displayName: 'Layout 3';
    description: '';
  };
  attributes: {
    SmallImage: Attribute.Media & Attribute.Required;
    LargeImage: Attribute.Media & Attribute.Required;
    Copy: Attribute.RichText;
    Pallete: Attribute.Media;
  };
}

export interface PageLayout4 extends Schema.Component {
  collectionName: 'components_page_layout_4s';
  info: {
    displayName: 'Layout 4';
  };
  attributes: {
    SmallImages: Attribute.Media & Attribute.Required;
    LargeImage: Attribute.Media & Attribute.Required;
    Copy: Attribute.RichText;
  };
}

export interface PageLayout5 extends Schema.Component {
  collectionName: 'components_page_layout_5s';
  info: {
    displayName: 'Layout 5';
  };
  attributes: {
    FullSizeImage: Attribute.Media & Attribute.Required;
  };
}

export interface PageLayout6 extends Schema.Component {
  collectionName: 'components_page_layout_6s';
  info: {
    displayName: 'Layout 6';
  };
  attributes: {
    ImageGroup1: Attribute.Media;
    ImageGroup2: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.layout-1': PageLayout1;
      'page.layout-2': PageLayout2;
      'page.layout-3': PageLayout3;
      'page.layout-4': PageLayout4;
      'page.layout-5': PageLayout5;
      'page.layout-6': PageLayout6;
    }
  }
}
