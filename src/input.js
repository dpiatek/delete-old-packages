module.exports = class Input {
  constructor(owner, repo, names, versionPattern, keep, token) {
    if (!owner || owner === "") {
      throw new Error("owner cannot be empty")
    } else if (!repo || repo === "") {
      throw new Error("repo cannot be empty")
    } else if (!names || names.length === 0) {
      throw new Error("names cannot be empty")
    } else if (names.length > 20) {
      throw new Error("names cannot contain more than 20 items")
    } else if (!versionPattern || versionPattern === "") {
      throw new Error("version-pattern cannot be empty")
    } else if (!Number.isInteger(Number(keep)) || Number(keep) < 0 || Number(keep) > 100) {
      throw new Error("keep must be an integer between 0 and 100 (inclusive)")
    } else if (!token || token === "") {
      throw new Error("token cannot be empty")
    }

    this.owner = owner
    this.repo = repo
    this.names = names
    this.token = token

    this.keep = Number(keep)

    try {
      this.versionPattern = new RegExp(versionPattern)
    } catch (error) {
      throw new Error("version-pattern must be a valid regex: " + error.message)
    }
  }
}
