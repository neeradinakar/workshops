# Surveyor App

This repository contains the product concept and design exploration for a land-surveyor discovery and booking platform. The work is grounded in the PRD PDF for the Surveyor App and a set of screen concepts focused on cadastral trust, surveyor verification, and digital land-record workflows.

## Project summary
The app helps property owners and customers find, compare, and book qualified land surveyors for parcel, boundary, and cadastral needs. It creates a central marketplace for land-survey services that currently rely on fragmented referrals and informal coordination.

## Core problem
Customers struggle to discover reliable surveyors, check availability, and ensure their land work is completed with proper documentation. Surveyors also face difficulty extending their reach beyond local networks and converting demand into confirmed bookings.

## Goals
- Discover and compare expert surveyors
- Review qualifications, experience, tools, and availability
- Book survey slots in a transparent flow
- Receive digital survey reports as PDF and CAD deliverables
- Reassign interrupted surveys to the same expert until completion

## Non-goals
- Price negotiation with surveyors
- Ownership verification for land parcels
- Legal dispute handling for neighboring owners

## Product priorities
- FMB boundary map overlay
- Government-verified surveyor badges
- Package-based pricing
- Escrow and pay-after-survey flow
- Real-time booking delivery and confirmations

## User experience
The product supports both property owners and surveyors through a clear booking lifecycle:

1. Search by location, survey number, or map pin
2. Compare registered surveyors
3. Check availability and select a time slot
4. Confirm booking and payment terms
5. Complete the survey work
6. Receive final PDF or CAD results

## Requirements captured from the PRD
- Dual-language support in English and Telugu
- Downloadable PDF and CAD files with tamperproof watermarking
- Search and validation using Dharani and Meebhoomi references
- Fair pricing based on land coordinates and parcel size
- Escrow-based payments with release after job completion
- WhatsApp and SMS notifications for bookings and report delivery
- Verified surveyor credentials and authority badges

## Acceptance criteria highlights
- Verified surveyor badges appear only when the profile is marked verified
- FMB boundary overlays must appear in under 2 seconds for valid land references
- Package costs must auto-calculate at checkout
- Escrow payments should authorize without releasing funds until the job is completed
- Draft report previews should be clearly marked as unapproved

## Repository structure
- stitch_squared_land_surveyor_app_Screens
  - cadastral_trust_precision
  - live_survey_dispatch_digital_land_vault
  - map_first_discovery_survey_search
  - slot_selection_escrow_checkout
  - surveyor_profile_package_selection
  - squared_brand_logo

## Design direction
The visual language uses a trust-centered, cadastral-tech aesthetic. It combines structured authority, legal precision, map clarity, and strong verification cues to make the platform feel reliable and institutional.

## Notes
This repository is currently a product and design concept set, not a full application codebase. The next step would be to turn the PRD and screens into a working app architecture with user flows, API contracts, and a frontend implementation.

## Source
The information in this README is based on the PRD PDF in the project root, which covers the product requirement details and acceptance criteria for the Surveyor App.
