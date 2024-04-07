"use client";

import {useEffect, useState} from "react";

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Lead from "@/components/lead";

export default function Home() {

    const [scrollToFeatures, setScrollToFeatures] = useState(null);

    const myCallback = (element: Element) => {
        element.scrollIntoView()
    }

  return (
    <>
      <Hero />
      {/*<Features />*/}
      <Zigzag />
      {/*<Lead/>*/}
      {/*<Testimonials />*/}
      <Newsletter />
    </>
  )
}
