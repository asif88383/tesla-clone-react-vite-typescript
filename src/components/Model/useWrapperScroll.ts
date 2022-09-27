import { useContext, useEffect } from "react";
import {useMotionValue} from 'framer-motion';

import ModelsContext from './ModelsContext';

export default function useWrapperScroll(){
    const {wrapperRef} = useContext(ModelsContext);
}