import { withTheme } from "styled-components";

import { Section, Container, Grid, GridItem } from "components/elements";
import { Skill, Timeline } from "components/compounds";

// Component
const Hero = ({ theme }) => {
    const skills = [
        { tag: "Photoshop", percentage: "50%" },
        { tag: "Photoshop", percentage: "50%" },
        { tag: "Photoshop", percentage: "50%" },
        { tag: "Photoshop", percentage: "50%" },
        { tag: "Photoshop", percentage: "50%" },
        { tag: "Photoshop", percentage: "50%" },
    ];

    return (
        <>
            <Section height="650px" bg={theme.backgroundColor.secondary}>
                <Container>
                    <Grid>
                        <GridItem>
                            <div>
                                <h1>
                                    A title that will include something soon...
                                </h1>
                                <div style={{ display: "flex" }}>
                                    <Timeline />
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            dsn d dsk dc mdsjk ds dsj dsncev
                                            kiefcv ejk lkewc kjewcknewc ewlwq;
                                            fevopren eie weo w dw;l sdkds oeo
                                            djdds kjds ww , dpoew kjew d.
                                        </p>
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns:
                                                    "1fr 1fr 1fr",
                                                gridTemplateRows: "1fr 1fr",
                                                gridGap: "1rem",
                                            }}>
                                            {skills.map((skill, index) => (
                                                <Skill
                                                    key={index}
                                                    tag={skill.tag}
                                                    percentage={
                                                        skill.percentage
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GridItem>
                    </Grid>
                </Container>
            </Section>
        </>
    );
};

export default withTheme(Hero);
