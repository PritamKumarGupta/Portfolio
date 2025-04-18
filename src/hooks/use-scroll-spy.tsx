"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], options: IntersectionObserverInit = { threshold: 0.5 }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const cb = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    elements.forEach((element) => {
      const observer = new IntersectionObserver(cb, options)
      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => {
        observer.disconnect()
      })
    }
  }, [sectionIds, options])

  return activeId
}
