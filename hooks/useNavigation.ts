import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function useLocal() {
    const { language, currency } = useSelector((store: RootState) => store.reducer)
    const dispatch = useDispatch()

    return {

    };
}