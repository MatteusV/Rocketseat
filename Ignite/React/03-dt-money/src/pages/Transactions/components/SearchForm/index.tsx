import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { ButtonSearchTransaction, SearchFormContainer } from './styled'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTranscations(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTranscations)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <ButtonSearchTransaction disabled={isSubmitting} type="submit">
        <MagnifyingGlass /> Buscar
      </ButtonSearchTransaction>
    </SearchFormContainer>
  )
}
