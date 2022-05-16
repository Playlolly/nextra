import type { NextApiHandler } from 'next'
import resourcesLatestVersion from '../../../../resourcesLatestVersion.json'

const latestVersion: NextApiHandler = async (req, res) => {
  const { resource } = req.query

  try {
    console.log(resourcesLatestVersion)

    res.status(200).json(resourcesLatestVersion[resource.toString()].toString())
  } catch (err) {
    console.error(`Failed to retrieve resource information.`)
    res.status(404).end()
  }
}

export default latestVersion
