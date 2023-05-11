'use client'
import { getURL } from '@/utils/i18n';
import { Link } from '@chakra-ui/next-js'
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Select } from '@chakra-ui/react'
import { useTranslation } from "@/app/i18n/client";

/*
export async function generateMetadata(props: any): Promise<Metadata> {
  const lang = props.params.lang;
  const t = useTranslation(lang, ["home"]);
  return { 
    title: t('page.title', {ns: 'home'}) as string,
    description: t('page.description', {ns: 'home'}) as string
  };
}
*/

export default function InnerPage(props: any) {
  const lang = props.params.lang;
  const t = useTranslation(lang, ["home"]);

  return (
    <>
      <Flex height='calc(100vh - 100px)' justifyContent='center' alignItems='center'>
        <Link href={getURL('/form', lang)}>Go to form</Link>
      </Flex>
    </>
  )
}
