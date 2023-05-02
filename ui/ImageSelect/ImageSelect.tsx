import {
    useCallback,
    useRef,
    useState,
    FC
} from 'react'
import {
    StyledAddButton,
    StyledImage,
    // StyledAddButton, StyledImage,
    StyledImageSelect, StyledInput,
    // StyledInput
} from './styles'
import { BiImageAdd } from 'react-icons/bi'
import { storage } from '../../firebase-config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
interface ImageSelectProps {
    // handleChangeValue: (key: string, value: string | string[]) => void
    defaultUrl: string
    onChange?: (imageUrl: string) => void
}
const ImageSelect: FC<ImageSelectProps> = ({ onChange, defaultUrl }) => {
    const fileSelectRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<File | null>(null);

    const uploadImage = useCallback(() => {
        if (fileSelectRef.current?.files?.length && onChange) {
            const file = fileSelectRef.current.files[0];
            setImage(file);
            const imageRef = ref(storage, `${file.name}${Math.random()}`)
            uploadBytes(imageRef, file).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    onChange(url)
                })
            })
            setImage(null)
        }
    }, [onChange]);

    return (
        <StyledImageSelect>
            <StyledInput
                ref={fileSelectRef}
                type="file"
                onChange={uploadImage}
            />
            <StyledAddButton onClick={() => fileSelectRef.current?.click()}>
                <BiImageAdd color='white' />
            </StyledAddButton>
            <StyledImage src={defaultUrl ? defaultUrl : ''} />
        </StyledImageSelect>
    )
}

export default ImageSelect