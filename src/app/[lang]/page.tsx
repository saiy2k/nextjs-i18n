import type { Metadata } from 'next';
// import { useTranslation } from "@/app/i18n/client";
import InnerPage from './inner';

export async function generateMetadata(props: any): Promise<Metadata> {
  /*
  const lang = props.params.lang;
  const t = useTranslation(lang, ["home"]);
  return { 
    title: t('page.title', {ns: 'home'}) as string,
    description: t('page.description', {ns: 'home'}) as string
  };
   */
  return { 
    title: 'Static title',
    description: 'Static description'
  };
}

export default function Page(props: any) {
  return (
    <>
      <InnerPage {...props} />
    </>
  )
}
