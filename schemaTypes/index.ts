// Main Document Types
import siteSettings from './siteSettings'
import homePage from './homePage'
import pricingPage from './pricingPage'
import activitiesPage from './activitiesPage'
import contactPage from './contactPage'

// Content Types
import businessInfo from './businessInfo'
import apartment from './apartment'
import guestRoom from './guestRoom'

export const schemaTypes = [
  // Core Site Content
  siteSettings,
  homePage,
  pricingPage,
  activitiesPage,
  contactPage,
  
  // Business Settings
  businessInfo,
  
  // Content Types
  apartment,
  guestRoom,
]