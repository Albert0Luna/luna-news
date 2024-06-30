import { Logo } from '@/types/interfaces'

export default function SpanishIcon ({width, height}: Logo) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" className="flag_icon"><mask id="circleFlagsEsVariant0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsEsVariant0)"><path fill="#d80027" d="M0 0h512v128l-39.8 130.3L512 384v128H0V384l37.8-124L0 128z"/><path fill="#ffda44" d="M0 128h512v256H0z"/></g></svg>
  )
}
