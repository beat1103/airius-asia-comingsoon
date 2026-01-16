import { useCallback } from 'react'

export const useScroll = () => {
  const scrollTo = useCallback((elementId: string, options?: ScrollIntoViewOptions) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        ...options,
      })
    }
  }, [])

  return { scrollTo }
}
