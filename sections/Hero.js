import { withTheme } from "styled-components";

import { Section, Container, Grid, GridItem, Box } from "components/elements";
import { Skill, Timeline } from "components/compounds";

// Component
const Hero = ({ theme, data }) => {
    const { title, text, skills } = data;

    return (
        <>
            <Section height="650px" bg={theme.backgroundColor.secondary}>
                <Container>
                    <Grid>
                        <GridItem>
                            <div>
                                <h1>{title}</h1>
                                <div style={{ display: "flex" }}>
                                    <Timeline />
                                    <div>
                                        <p style={{ marginBottom: "1rem" }}>
                                            {text}
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
