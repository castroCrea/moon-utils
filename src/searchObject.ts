type Indexable = Record<string, any>

// Function to search into the object using a string path
export const searchObject = ({
  obj,
  path
}: { obj: object, path: string }) => {
  const keys = path.split('.') // Split the path string into an array of keys
  let current: Indexable = obj

  for (const key of keys) {
    try {
      const findKey = Object.keys(current).find(k => k.toLowerCase() === key.toLowerCase())
      if (current && findKey) {
        current = current[findKey]
      } else { return undefined } // Key doesn't exist in the object
    } catch (e) {
      console.log({ e })
      return undefined
    }
  }

  return current // Return the value found at the end of the path
}
