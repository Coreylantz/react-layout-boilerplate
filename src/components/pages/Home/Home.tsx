import { Card } from 'components/common/Card'
import { Box } from 'components/layouts/Box'
import { Center } from 'components/layouts/Center'
import { Cluster } from 'components/layouts/Cluster'
import { Cover } from 'components/layouts/Cover'
import { Frame } from 'components/layouts/Frame'
import { Grid } from 'components/layouts/Grid'
import { Icon } from 'components/layouts/Icon'
import { Imposter } from 'components/layouts/Imposter'
import { Reel } from 'components/layouts/Reel'
import { Sidebar } from 'components/layouts/Sidebar'
import { Stack } from 'components/layouts/Stack'
import { Switcher } from 'components/layouts/Switcher'
import { FakeContentBlock } from 'components/misc/FakeContentBlock'
import { FakeImageBlock } from 'components/misc/FakeImageBlock'

export const Home = () => {
    return (
        <div>
            <Cover centeredSelector=".hero">
                <Cluster justify={'space-between'}>
                    <div>BP</div>
                    <Cluster justify="flex-start" isList>
                        <li>hey</li>
                        <li>hi</li>
                        <li>yo</li>
                    </Cluster>
                </Cluster>
                <Center className="hero">
                    <h1 style={{ textAlign: 'center' }}>
                        Welcome! This is a site!
                    </h1>
                </Center>
                <Center>
                    <p style={{ textAlign: 'center' }}>It is a WIP</p>
                </Center>
            </Cover>
            <Box borderWidth="0">
                <Sidebar>
                    <Stack>
                        <Frame>
                            <FakeImageBlock height={480} width={720} />
                        </Frame>
                        <p>This is made by Corey</p>
                        <p>Its a boilerplate</p>
                        <p>Based on layouts from Every Layout</p>
                    </Stack>
                    <div>
                        <Center>
                            <Stack>
                                <FakeContentBlock numberOfparagraphs={3} />
                                <Switcher>
                                    <div>
                                        <FakeImageBlock
                                            height={150}
                                            width={150}
                                        />
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </div>
                                    <div>
                                        <FakeImageBlock
                                            height={150}
                                            width={150}
                                        />
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </div>
                                    <div>
                                        <FakeImageBlock
                                            height={150}
                                            width={150}
                                        />
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </div>
                                </Switcher>
                                <Reel>
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                    <FakeImageBlock />
                                </Reel>
                                <Grid>
                                    <Card>
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </Card>
                                    <Card>
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </Card>
                                    <Card>
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </Card>
                                    <Card>
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </Card>
                                    <Card>
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </Card>
                                    <Card>
                                        <FakeContentBlock
                                            numberOfparagraphs={1}
                                            hasHeadings={false}
                                        />
                                    </Card>
                                </Grid>
                                <div style={{ position: 'relative' }}>
                                    <FakeContentBlock
                                        numberOfparagraphs={3}
                                        hasHeadings={true}
                                    />
                                    <Imposter>
                                        <Card invert>
                                            <FakeContentBlock
                                                numberOfparagraphs={1}
                                                hasHeadings={true}
                                            />
                                            <Center>
                                                <button>
                                                    <Icon
                                                        iconId="close"
                                                        text="Close"
                                                    />
                                                </button>
                                            </Center>
                                        </Card>
                                    </Imposter>
                                </div>
                            </Stack>
                        </Center>
                    </div>
                </Sidebar>
            </Box>
        </div>
    )
}
