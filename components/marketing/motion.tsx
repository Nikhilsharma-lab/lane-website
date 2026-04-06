'use client'

import { motion, type Variants, AnimatePresence } from 'motion/react'
import { type ReactNode } from 'react'

/* ═══ Shared animation variants ═══ */

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/* ═══ Components ═══ */

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'blockquote'
}

/** Fade-up on viewport enter. */
export function FadeIn({ children, className, delay = 0, as = 'div' }: FadeInProps) {
  const Tag = motion[as] as typeof motion.div
  return (
    <Tag
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  )
}

/** Fade (no vertical movement) on viewport enter. */
export function Fade({ children, className, delay = 0, as = 'div' }: FadeInProps) {
  const Tag = motion[as] as typeof motion.div
  return (
    <Tag
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
}

/** Staggered container — children animate in sequence on viewport enter. */
export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Individual stagger item — use as child of <Stagger>. */
export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  )
}

/** Scale-up on viewport enter — for hero screenshot, large cards. */
export function ScaleIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface TabContentProps {
  id: string | number
  children: ReactNode
  className?: string
}

/** AnimatePresence wrapper for tab crossfade. */
export function TabContent({ id, children, className }: TabContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

/* Re-export motion for one-off usage */
export { motion, AnimatePresence }
