import {Card, Flex, Select, Stack} from '@sanity/ui'
import {LanguageType} from '../i18n'
import {ChangeEvent} from 'react'
import { getPath } from '../utils'

export default function Navbar(languages: LanguageType) {
  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const path = getPath(window.location.href);
    window.location.href = `/${event.target.value}/${path.url}`;
  }

  return (props: any) => {

    const path = getPath(window.location.href);

    return (
      <Card>
        <Flex justify="center">
          <>{props.renderDefault(props)}</>
          {languages && (
            <Stack
              paddingRight={2}
              style={{
                width: '90px',
                borderBottom: '1px solid #2a2d3f',
                height: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Select onChange={(event) => onSelect(event as ChangeEvent<HTMLSelectElement>)}>
                {languages.map((lang: string) => (
                  <option key={lang} value={lang} selected={path.lang === lang}>
                    {lang}
                  </option>
                ))}
              </Select>
            </Stack>
          )}
        </Flex>
      </Card>
    )
  }
}
