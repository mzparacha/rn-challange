import React, { ReactElement, useState, useEffect } from 'react';

import { SearchLocation } from '../SearchLocation';
import ClosestBranchContext from './ClosestBranchContext';
import { Branch } from '../Branch';
import useLoading from '../useLoading';
import { closestBranchTo } from '../distances';

interface Props {
  children: ReactElement;
}

const ClosestBranchProvider = ({ children }: Props) => {
  const [state, branches] = useLoading();
  const [search, setSearch] = useState<SearchLocation>();
  const [closest, setClosest] = useState<undefined | Branch>();

  useEffect(() => {
    if (branches && typeof search === 'object') {
      setClosest(closestBranchTo(search, branches));
    } else {
      setClosest(undefined);
    }
  }, [search, branches]);

  return (
    <ClosestBranchContext.Provider
      value={{
        closest,
        state,
        setSearch,
        search,
      }}>
      {children}
    </ClosestBranchContext.Provider>
  );
};

export default ClosestBranchProvider;
