import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@services/slices/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
