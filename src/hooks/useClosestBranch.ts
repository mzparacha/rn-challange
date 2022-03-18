import { useContext } from "react"
import { ClosestBranchContext } from '../contexts'

export const useClosestBranch = () => {
  const CloseBranches = useContext(ClosestBranchContext)

  return {
    state: CloseBranches?.state,
    closest: CloseBranches?.closest,
    setSearch: CloseBranches?.setSearch,
    search: CloseBranches?.search
  }
}

