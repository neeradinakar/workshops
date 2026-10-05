# Surveyor App Project Context

## Overview
This project is a land-surveyor booking and delivery platform designed for property owners and customers who need to discover, compare, and book qualified land surveyors in Telangana and Andhra Pradesh. The product addresses a fragmented market where customers rely on local referrals, informal contacts, and manual scheduling rather than a centralized, trustworthy discovery platform.

## Source document
The primary product requirements were captured in the PRD PDF titled: c8ec29b7-cb4f-456d-9d52-79431a237116_Surveyor_App_PRD.pdf.

## Problem statement
Property owners and other customers struggle to discover and book licensed land surveyors because the market is fragmented across word-of-mouth referrals, local contacts, and informal communication channels. This makes it difficult to find the right surveyor, confirm availability, and schedule services efficiently.

At the same time, land surveyors have limited ways to reach beyond their existing local networks and book work through a digital marketplace. The platform aims to centralize that discovery and booking flow while improving trust, transparency, and service completion.

## Goals
- Compare and book services of expert land surveyors registered on the platform.
- Show surveyor experience, tools or methods used for digital surveying, location, and availability on a selected date.
- Deliver post-survey reports to the customer through the platform as downloadable PDF files.
- Handle interrupted surveys due to weather, time constraints, low light, or unforeseen blockages by reassigning the same expert until completion.
- Support streamlined search using map, survey number, village, and land parcel data.

## Non-goals
- Price negotiation with experts.
- Handling disputes with neighboring owners.
- Verification or validation of land ownership.

## Success metrics
- North Star: number of completed bookings by users.
- L1: percentage of bookings accepted by experts and percentage of bookings that receive final PDF files.
- Counter metrics: task drop rate and D30 inactivity rate.

## Main user personas
### Customer / Property owner
Needs a trusted, streamlined way to find a surveyor, view expertise and availability, schedule work, and receive digital survey outputs.

### Land surveyor
Needs a simple channel to reach customers, show credentials, receive bookings, complete jobs, and deliver final survey reports digitally.

## Core user journey
1. Discover surveyors by region, survey number, or map pin.
2. Compare profiles based on qualifications, availability, and process methods.
3. Check the best slot and book the service.
4. Receive booking confirmation, reminders, and status updates.
5. Complete the survey appointment.
6. Receive final CAD/PDF report securely through the platform.

## Competitive landscape summary
The product is positioned against fragmented local referral channels and incomplete digital marketplace offerings.

- Property record platforms: basic record access but weak surveyor booking workflows.
- Service marketplaces: some listing/discovery features but limited real-time availability and verified field survey workflows.
- Specialized land-tech providers: stronger map and record services, but weaker end-to-end booking and survey completion flows.

## Priority product initiatives
- Pin-drop and FMB boundary map overlay
- Government-verified surveyor badges
- Upfront package pricing
- Pricing and escrow payment flows
- B2B developer subscription accounts

## Functional requirements
- Support dual-language experience in Telugu and English.
- Allow downloadable PDF and CAD files with tamperproof watermarking.
- Support partition services in joint-family land parcel surveying.
- Calculate fair pricing based on map coordinates and land measurements.
- Accept complex village names via voice input option.
- Support search by Telangana Dharani or Andhra Pradesh Meebhoomi survey / Pahani number.
- Auto-populate parcel details from map pin placement or land records.
- Show verified surveyor profiles with badges and credentials.
- Support secure escrow-based payment flow with payment released after job completion.
- Notify both customer and surveyor through SMS and WhatsApp.
- Deliver secure downloadable report links to the user’s WhatsApp number.

## Non-functional requirements
### Performance
- Time to load available surveyors for the selected region and date should be under 600 ms.

### Quality
- Government-certified expertise validation should be performed via certificates and licenses.

### Reliability
- Data should be encrypted and stored only for 6 months.

### Security
- DPDP compliance and secure transactions using an escrow account model.

### Usability
- Users should be able to search for a surveyor and book within 4 minutes.

## Acceptance criteria
### AC 1.1
Display the “Licensed Revenue Surveyor” badge on profile cards if and only if is_verified == true in the admin database.

### AC 1.2
Tapping the verification badge opens a modal showing the license ID, issuing authority, and expiration date.

### AC 2.1
Given a user enters a valid Telangana or Andhra Pradesh survey number, the official FMB boundary polygon overlays onto the satellite map in under 2 seconds.

### AC 2.2
Given a user drops a GPS pin on the satellite view, the nearest village name, mandal, district, and survey number should auto-populate within a 50-meter radius.

### AC 3.1
Package cost should auto-calculate in checkout based on service type and plot size.

### AC 3.2
Selecting escrow / pay-after-survey authorizes the transaction amount without transferring funds until job completion.

### AC 4.1
On booking confirmation, send instant SMS and WhatsApp booking details to both user and surveyor.

### AC 5.1
When a surveyor uploads a CAD/PDF file, trigger a secure download link to the user’s registered WhatsApp in under 5 seconds.

### AC 5.2
Watermark draft preview maps with “UNAPPROVED DRAFT” until approval or escrow clearing.

## Repo context
The workspace contains a design and mockup set under the folder:

- stitch_squared_land_surveyor_app_Screens

This includes concept screens and design tokens focused on a high-trust cadastral and land-tech aesthetic, including:
- cadastral trust precision
- live survey dispatch digital land vault
- map first discovery survey search
- slot selection escrow checkout
- surveyor profile package selection
- squared brand logo

## Design direction
The product uses a high-trust, authoritative visual language aimed at legal confidence and operational clarity. The system prioritizes:
- clean layouts
- clear boundary and record information
- dual-language clarity in English and Telugu
- strong verification experiences
- payment and escrow assurance
- professional cadastral data presentation

## Recommended product interpretation
This is best treated as a land-tech marketplace and workflow application for property surveying, boundary checks, and cadastral report delivery. The immediate product focus is discovery, booking, and trusted report delivery rather than a broader legal-title or ownership-verification platform.

## Suggested next steps
1. Convert the PRD into feature stories and epics.
2. Create flows for discovery, booking, escrow, and report delivery.
3. Design the actual app screens in code or prototype form.
4. Define backend data models for surveyors, bookings, parcels, and reports.
5. Build verification and payment integration with regulatory and escrow requirements.
