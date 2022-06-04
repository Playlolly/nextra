---
title: Configuration - Tesla Autonomous - Docs
---

# Configuration

The configuration file can be found in the Playlolly Tesla Autonomous Add-On Resource under `/shared/config.lua`.

### `trigger`

Command which must be called in the chat with `/...` to trigger the Tesla Autonomous chat suggestions.

**Type:** `string`\
**Default:** `'tesla'`

### `vehicles`

Vehicle hashes for autonomous support.

**Type:** `object`\
**Default:** `{2006210393, -252836656, 967185883, -1290262746, 1281801152, 1717202867, -964913869, -2086233241, -450863688, 170327252, 2014463299}`

### `vehicleMapBlip`

Visibility of Tesla blip on the map.

**Type:** `boolean`\
**Default:** `true`

## Autopilot

### `status`

Enable / Disable the Autopilot command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Autopilot chat trigger command.

**Type:** `string`\
**Default:** `'pilot'`

### `defaultSpeed`

Default autopilot speed in meters per second.

**Type:** `number`\
**Default:** `20.0`

## Crash Avoidance

### `status`

Enable / Disable the Crash Avoidance command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Crash Avoidance chat trigger command.

**Type:** `string`\
**Default:** `'crash'`

## Auto Lane Change

### `status`

Enable / Disable the Auto Lane Change command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Auto Lane Change chat trigger command.

**Type:** `string`\
**Default:** `'lanes'`

## Auto Park

### `status`

Enable / Disable the Auto Park command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Auto Park chat trigger command.

**Type:** `string`\
**Default:** `'park'`

## Reverse Camera

### `status`

Enable / Disable the Reverse Camera command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Reverse Camera chat trigger command.

**Type:** `string`\
**Default:** `'reverse'`

## Adaptive Lighting

### `status`

Enable / Disable the Adaptive Lighting command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Adaptive Lighting chat trigger command.

**Type:** `string`\
**Default:** `'light'`

## Smart Summon

### `status`

Enable / Disable the Smart Summon command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Smart Summon chat trigger command.

**Type:** `string`\
**Default:** `'summon'`

### `maximumDistance`

Maximum distance between the player and the vehicle in order to use Smart Summon.

**Type:** `number`\
**Default:** `1000.0`

## Dance Mode

### `status`

Enable / Disable the Dance Mode command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Dance Mode chat trigger command.

**Type:** `string`\
**Default:** `'dance'`
