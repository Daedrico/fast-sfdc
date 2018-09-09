export default {
  memoize: (fn: any) => {
    const cache: any = {}
    return async (...args: any[]) => {
      const stringifiedArgs = JSON.stringify(args)
      const result = cache[stringifiedArgs] = cache[stringifiedArgs] || (await fn(...args))
      return result
    }
  },

  sleep: async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
}