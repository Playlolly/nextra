---
title: Changelog - Tesla Autonomous
---

# Changelog

## Release 1.0.10

**Added**

- Adaptive Lighting function which automatically adjusts the light to the road traffic

**Updated**

- General stability and performance improvements

**Fixed**

- For a small part of users the resource could not be started correctly, this is now fixed

## Release 1.0.9

**Added**

- Ultrasonic sounds for reverse camera function (reverse camera is no longer a BETA function)

**Updated**

- General revision of the smart summon algorithm resulting in fewer accidents

## Release 1.0.8

**Added**

- Reverse Camera _BETA_ function

**Updated**

- Ensure compatibility for upcoming Core updates

## Release 1.0.7

**Added**

- Support for custom notification systems
- A maximum distance between the player and the car can be set for Smart Summon

**Updated**

- Configuration and translation are now available centralized in the `playlolly_tesla_core` resource

**Fixed**

- The custom autopilot speed can no longer be set into the minus range

## Release 1.0.6

**Added**

- Auto Park _BETA_ function which can automatically park at Supercharger parking lots

**Updated**

- Crash Avoidance can now be activated in all scenarios and no longer automatically turns off after a collision

## Release 1.0.5

**Added**

- During the Tesla Dance, vehicle lights, turn signals and brake lights adjust accordingly

**Updated**

- General revision of the auto lane change algorithm resulting in fewer accidents (auto lane change is no longer a _BETA_ function)

**Fixed**

- Autopilot no longer accidentally shifts into the wrong driving lane
- Auto lane change takes approaching vehicles into account and thus avoids possible collisions
- Upon termination of the Tesla dance, all doors will close properly

## Release 1.0.4

**Added**

- Auto Lane Change _BETA_ function which can autonomously overtake other vehicles on the highway
- When honking with engaged autopilot at a red traffic light with `E`, the traffic light is ignored and the vehicle continues to drive
- Smart summon now uses local pathing to drive flawlessly to the vehicle owner

**Updated**

- Autopilot now automatically avoids parked or empty cars
- General rework of the smart summon algorithm resulting in a more realistic driving style

**Fixed**

- Autopilot now considers all roads (not only main roads) when determining the next possible vehicle-accessible destination point
- When deactivating the autopilot, control can now be taken over directly without waiting for the car to brake

## Release 1.0.3

**Added**

- Configuration option to set the default autopilot speed
- Possibility to adjust autopilot maximum speed while driving using `W` and `S`
- Possibility to perform an autopilot emergency stop when the `space bar` is pressed
- Autopilot now takes traffic lights and stop signs into account
- Native FiveM keybindings for all Tesla Autonomous commands which can be configured in the FiveM settings

**Updated**

- General rework of the autopilot algorithm resulting in a more realistic driving style

**Fixed**

- Tesla now no longer leaves the road for autopilot destinations outside of vehicle-accessible locations and stops at the nearest possible road access point

## Release 1.0.2

**Added**

- Configuration option to hide the Tesla Blip on the map
- Configuration option to customize the chat trigger command `/tesla`
- Configuration option to translate or customize all available texts

**Updated**

- Various optimizations to ensure a lower ms rate

## Release 1.0.1

**Added**

- Configuration option to enable / disable individual commands

## Release 1.0.0

**Added**

- Autopilot
- Crash Avoidance
- Auto Lanechange
- Smart Summon
- Tesla Dance
- Possibility to mark a Tesla
- Support for the Tesla HUD

**Updated**

- Separate resource for sounds is no longer needed
- Usability for interactions

**Fixed**

- Tesla is now automatically marked when entered
