import { createContext, Dispatch, SetStateAction } from 'react'
import { Branch } from '../Branch';
import { SearchLocation } from '../SearchLocation';

type ContextDataType = {
  closest?: undefined | Branch
  state?: 'loading-fonts' | 'loading-branches' | 'ready' | 'error'
  setSearch?: Dispatch<SetStateAction<SearchLocation>>
  search?: SearchLocation;
}


export default createContext<ContextDataType>({});