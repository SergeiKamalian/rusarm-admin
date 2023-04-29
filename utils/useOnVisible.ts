import { useEffect, RefObject } from 'react';

const useOnVisible = (
    currentRef: RefObject<HTMLDivElement>,
    actionOnView?: () => void,
    actionDontOnView?: () => void
) => {


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    actionOnView && actionOnView()
                } else {
                    actionDontOnView && actionDontOnView()
                }
            }, {
            threshold: 0,
        },
        );

        if (currentRef.current) {
            observer.observe(currentRef.current);
        }

        return () => {
            if (currentRef.current) {
                observer.unobserve(currentRef.current);
            }
        };
    }, [currentRef.current, actionDontOnView]);

};

export default useOnVisible;