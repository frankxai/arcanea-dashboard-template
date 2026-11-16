'use client';

import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { EASE } from '@/lib/motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

/**
 * Character-by-character reveal with custom easing.
 * Each character animates in with a slight upward motion.
 */
export function SplitText({ text, className = '', delay = 0, stagger = 0.03, as = 'span' }: Props) {
  const reduced = useReducedMotion();
  const chars = text.split('');
  const Tag: 'h1' | 'h2' | 'h3' | 'p' | 'span' = as;

  return (
    <LazyMotion features={domAnimation}>
      <Tag className={className} aria-label={text}>
        {chars.map((char, i) => (
          <m.span
            key={i}
            aria-hidden="true"
            initial={false}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: reduced ? 0 : 0.5,
              ease: EASE.smooth,
              delay: reduced ? 0 : delay + i * stagger,
            }}
            style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </m.span>
        ))}
      </Tag>
    </LazyMotion>
  );
}
