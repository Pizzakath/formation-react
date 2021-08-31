export const useTempconsome = ({ti, tr}={}) => {
    const getTempconsome = () => {
      console.log({ti, tr})
      return Number(ti) - Number(tr);
    }
    return {getTempconsome}
}