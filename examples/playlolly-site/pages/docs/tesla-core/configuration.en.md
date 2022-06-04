---
title: Configuration - Tesla Core - Docs
---

import Callout from '@playlolly/nextra-theme-docs/callout'

# Configuration

The configuration file can be found in the Playlolly Tesla Core Resource under `/shared/config.lua`.

## Frameworks

<Callout type="warning">
  Only enable one framework at a time, otherwise you will encounter problems.
</Callout>

### `qbCore`

Support for the QBCore framework. For the Tesla Core to work properly with QB Core, we recommend using [our configuration](https://github.com/Playlolly/qb-core/commit/a574efbf10ee4a36e76a9aa8cbdff1671f2e90fb#diff-e75a7954b9086c1a3e21721e0027c56b0c96cd91cc933f19b5210be60a41bd6e).

**Type:** `boolean`\
**Default:** `true`

### `esx`

Support for the ESX framework.

**Type:** `boolean`\
**Default:** `false`

### `vRP`

Support for the vRP framework.

**Type:** `boolean`\
**Default:** `false`

## Notifications

### `default`

Usage of the default notification system.

**Type:** `boolean`\
**Default:** `true`

If it is set to false, please use the following function to use a custom notification system. (The function name must be `CustomNotification`.)

```lua
function CustomNotification (message)
  SetNotificationTextEntry("STRING")
  AddTextComponentSubstringPlayerName(message)
  DrawNotification(false, false)
end
```

## HUD

### `vehicles`

Vehicle hashes for HUD support.

**Type:** `object`\
**Default:** `{2006210393, -252836656, 967185883, -1290262746, 1281801152, 1717202867, -964913869, -2086233241, -450863688, 170327252, 2014463299}`

### `visibility`

Visibility of the Tesla Head Up Display (HUD).

**Type:** `boolean`\
**Default:** `true`

### `speedMeasurement`

Speed measurement system using `KM/H` or `MPH`.

**Type:** `string`\
**Default:** `'KM/H'`

## Superchargers

### `vehicles`

Vehicle hashes for supercharger support.

**Type:** `object`\
**Default:** `{2006210393, -252836656, 967185883, -1290262746, 1281801152, 1717202867, -964913869, -2086233241, -450863688, 170327252, 2014463299}`

### `mapBlipVectors`

Vector locations for the Supercharger map blips.

**Type:** `object`

### `mapSuperchargerVectors`

Vector locations for the Supercharger on the map. The vectors must match the file `playlolly-tesla-supercharger.ymap` which can be found under `playlolly-tesla-core/stream/charger/...`.

**Type:** `object`

### `mapBlipId`

Set a custom Supercharger blip ID. An overview of all available blip ID can be found [here](https://docs.fivem.net/docs/game-references/blips).

**Type:** `number`\
**Default:** `354`

### `mapBlipColor`

Set a custom Supercharger blip color. An overview of all available blip colors can be found [here](https://docs.fivem.net/docs/game-references/blips/#BlipColors).

**Type:** `number`\
**Default:** `75`

### `mapBlips`

Visibility of Supercharger markings on the map.

**Type:** `boolean`\
**Default:** `true`

### `mapBlipsTesla`

Only show Supercharger markings on the map if you are in a Tesla.

**Type:** `boolean`\
**Default:** `false`

### `chargeRate`

Time until a tesla is fully charged (from 0-100%).

**Type:** `number`\
**Default:** `30.0`

### `detectionRadius`

Detection radius to start the charging process.

**Type:** `number`\
**Default:** `5.0`

### `levelSamples`

How many samples the battery level is updated after ( more samples the more accurate).

**Type:** `number`\
**Default:** `1500.0`

### `multiplier`

Energy consumption when driving (higher means higher energy consumption).

**Type:** `number`\
**Default:** `0.33`
