import { useRouter } from 'next/router';

function checkEqual(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const useCheckLinkActive = (
  href: string,
  as?: string,
  index?: boolean
): boolean => {
  let { asPath } = useRouter();

  asPath = asPath.split('?')[0].trim();
  href = href.split('?')[0].trim();
  as = as?.split('?')[0].trim();

  if (href === '/' || index) {
    return asPath === href;
  }

  const hrefArr = href.split('/');
  const asArr = as?.split('/');
  const asPathArr = asPath.split('/').splice(0, hrefArr.length);

  if (asArr) {
    return checkEqual(asArr, asPathArr) && checkEqual(hrefArr, asPathArr);
  }

  return checkEqual(hrefArr, asPathArr);
};

export default useCheckLinkActive;
