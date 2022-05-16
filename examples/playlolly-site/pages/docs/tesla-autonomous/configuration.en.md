---
title: Configuration
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
**Default:** `{ -252836656, 2006210393, 967185883, 1281801152, -1290262746, 1717202867, -964913869, -450863688, 2014463299 }`

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

Autopilot chat enable / disable command.

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

Crash Avoidance chat enable / disable command.

**Type:** `string`\
**Default:** `'crash'`

## Auto Lane Change

### `status`

Enable / Disable the Auto Lane Change command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Auto Lane Change chat enable / disable command.

**Type:** `string`\
**Default:** `'lanes'`

## Auto Park

### `status`

Enable / Disable the Auto Park command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Auto Park chat enable / disable command.

**Type:** `string`\
**Default:** `'park'`

## Smart Summon

### `status`

Enable / Disable the Smart Summon command.

**Type:** `boolean`\
**Default:** `true`

### `command`

Smart Summon chat enable / disable command.

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

Dance Mode chat enable / disable command.

**Type:** `string`\
**Default:** `'dance'`
