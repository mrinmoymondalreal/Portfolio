import { clsx, type ClassValue } from "clsx"
import { useEffect, useLayoutEffect, useState } from "react";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type AtomType<T> = {
  set: (v: T) => void,
  get: () => T,
  sub: (cb: (newValue: T) => void) => () => void
}

export function atom<T>(initial: T): AtomType<T>{
  let value = initial;
  let callback = new Set<(newValue: T) => void>();

  return {
    set(v: T) {
      value = v;
      callback.forEach((cb) => cb(value));
    },
    get(){
      return value;
    },
    sub: (cb) => {
      callback.add(cb);
      return () => callback.delete(cb);
    }
  }
}


export function useAtom<T>(atom: AtomType<T>){
  const [state, setState] = useState<T>(() => atom.get());
  useEffect(() => {
    let unsub = atom.sub(setState);
    return () => unsub();
  }, [atom]);
  return [state, atom.set];
}

export function setAtom<T>(atom: AtomType<T>){
  return atom.set;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useLayoutEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
