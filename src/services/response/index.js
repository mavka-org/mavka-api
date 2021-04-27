export const success = (res, status) => (entity) => {
  if (entity) {
    res.status(status || 200).json(entity)
  }
  return null
}

export const notFound = (res) => (entity) => {
  if (entity) {
    return entity
  }
  res.status(404).end()
  return null
}

export const unauthorized = (res) => (entity) => {
  if (entity) {
    return entity
  }
  res.status(401).end()
  return null
}

export const conflict = (res, message) => (entity) => {
  if (entity) {
    return entity
  }
  res.status(409).json({ message })
  return null
}

export const internalError = (res, message) => (entity) => {
  if (entity) {
    return entity
  }
  res.status(500).json({ message })
  return null
}
