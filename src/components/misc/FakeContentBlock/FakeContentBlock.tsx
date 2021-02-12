import { Fragment } from 'react'

interface IFakeContentBlockProps {
    hasH1?: boolean
    hasHeadings?: boolean
    numberOfparagraphs?: number
}

const PARAGRAPH_CONTENT =
    'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'

export const FakeContentBlock = ({
    hasHeadings = true,
    hasH1 = false,
    numberOfparagraphs = 1,
}: IFakeContentBlockProps) => {
    const paragraphs = []

    for (let i = 0; i < numberOfparagraphs; i++) {
        paragraphs[i] = PARAGRAPH_CONTENT
    }

    return (
        <>
            {hasH1 && <h1>Heading</h1>}
            {paragraphs.map((paragraph, i) => (
                <Fragment key={`content-block-${i}`}>
                    {hasHeadings && <h2>Section {i + 1}</h2>}
                    <p>{paragraph}</p>
                </Fragment>
            ))}
        </>
    )
}
