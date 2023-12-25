import { useMediaQuery } from "@react-hook/media-query";

const useMedia = () => {
 const mobile = useMediaQuery("(max-width: 767px)");
 const tablet = useMediaQuery("(min-width: 768px)");
    const desktop = useMediaQuery("(min-width: 1280px)");
    return { mobile, tablet, desktop };
}

export default useMedia