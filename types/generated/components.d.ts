import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'about-section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    servicePillars: Schema.Attribute.Component<'sections.service-card', true>;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    address: Schema.Attribute.Blocks;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'contact-section';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'sections.contact-info', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    showForm: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Component<'shared.media', false>;
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    showReelThumbnail: Schema.Attribute.Component<'shared.media', false>;
    showReelVideo: Schema.Attribute.Component<'shared.media', false>;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsInsightsPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_insights_previews';
  info: {
    displayName: 'insights-preview';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    showCount: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    viewAllButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface SectionsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_cards';
  info: {
    displayName: 'service-card';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media';
  };
  attributes: {
    altText: Schema.Attribute.String;
    caption: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-section': SectionsAboutSection;
      'sections.contact-info': SectionsContactInfo;
      'sections.contact-section': SectionsContactSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.insights-preview': SectionsInsightsPreview;
      'sections.service-card': SectionsServiceCard;
      'shared.button': SharedButton;
      'shared.media': SharedMedia;
      'shared.seo': SharedSeo;
    }
  }
}
