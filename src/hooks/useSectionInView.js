import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for section scroll spy functionality.
 * Returns a ref to attach to the section element.
 * Calls onInView callback when section enters viewport.
 */
export function useSectionInView(sectionId, onInView) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

    useEffect(() => {
        if (isInView && onInView) {
            onInView(sectionId);
        }
    }, [isInView, sectionId, onInView]);

    return ref;
}
