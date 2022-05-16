---
title: Changelog
---

import Callout from '@playlolly/nextra-theme-docs/callout'

# Changelog

## Release 1.0.9

<Callout type="warning">
  It is recommended to delete all Tesla resources and upload them again using
  the latest version to avoid possible bugs with Core Release 1.0.9. In
  addition, only the Core resource should be started in the server
  configuration.
</Callout>

**Added**

- Central update system for all Playlolly Tesla resources
- Support for Reverse Camera function
- Configuration option for supercharger map blip vector locations

**Fixed**

- Supercharger charging process can now no longer be started when inside a Tesla

## Release 1.0.8

**Added**

- Added support for the Model 3, Roadster, Cybertruck, Cyberquad and Semi

**Updated**

- Various optimizations to ensure a lower ms rate

## Release 1.0.7

**Added**

- Added support for custom Supercharger blips and the corresponding color

## Release 1.0.6

**Added**

- Added support for custom notification systems
- Added responsive HUD position for `2560x1440` and `3440x1440` screen resolution
- Added seperate configuration options for custom supported vehicles for Supercharger, HUD and Autonomous
- Added support for the Model S Plaid, Model X Plaid and Model Y

**Updated**

- Configuration and translation are now available centralized in the `playlolly_tesla_core` resource
- Vehicles must now be listed in the config via the hash value and no longer via the model name
- Adjusted realism of the Model 3 handling

**Fixed**

- Battery color will now correctly changes from green to orange to red in the HUD
- All vehicles now have a correct model name

## Release 1.0.5

**Added**

- Added turn indicators to the HUD
- Added HUD display for the Auto Park function
- Added responsive HUD position for `2560x1080` screen resolution

**Updated**

- All Supercharger locations have been reworked, stations have been expanded or individual Superchargers have been relocated for a more realistic experience
- Minor design adjustment in the HUD

## Release 1.0.4

**Added**

- Traffic lights detected by the autopilot are displayed with the corresponding color in the HUD
- Added HUD display for the Auto Lane Change function
- If a traffic light is ignored by honking with `E` while the autopilot is active, it will be signaled in the HUD

**Updated**

- Crash avoidance HUD notification has been redesigned to also illuminate the road lanes and the detected vehicle in red
- Colors of the road lanes when autopilot is active have been adjusted in the HUD

## Release 1.0.3

**Added**

- When Autopilot is active, the set maximum speed is now displayed in the HUD instead of the Crash Avoidance icon

## Release 1.0.2

**Added**

- Configuration option to set the HUD speed measurement system using `KM/H` or `MPH`
- Configuration option to only show Supercharger markings on the map if you are in a Tesla

## Release 1.0.1

**Added**

- Configuration option to add custom vehicles for Supercharger support
- Configuration option to translate or customize all available texts

**Updated**

- Various optimizations to ensure a lower ms rate

**Fixed**

- Fixed a refresh bug that caused a ms rate of `0.22` which has now been reduced to `0.02`

## Release 1.0.0

**Added**

- Tesla HUD which displays all information about a Tesla. This includes driving information, parking information, charging information, Autopilot information and accident warnings
- 60 new Supercharger locations
- New charging options

**Updated**

- Tesla Roadster 3D model and handling
- Tesla Supercharger 3D model
- Complete code has been reworked which leads to a massive performance improvements
- Improved usability during the charging process

**Fixed**

- Tesla Superchargers now have collision
- Tesla Model S interactions and rendering
- Tesla Model 3 interactions and rendering
- Tesla Model X interactions and rendering
- Tesla Roadster interactions and rendering
- Tesla Cybertruck interactions and rendering
- Tesla Semi interactions and rendering
