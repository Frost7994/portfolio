// components
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid";
import { HorizontalGridLine } from "@/components/ui/gridLine";
import { FilterList } from "./components/filterList";
import { ShowcaseGrid } from "./components/showcaseGrid";
import { SwitchFilterList } from "./components/switchFilterList";

export const Showcase = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* top grid lines */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <HorizontalGridLine />
        </div>
        <div className="relative">
          <HorizontalGridLine size="sm" dashed />
        </div>
      </div>

      {/* content */}
      <Container className="w-full">
        <div className="flex flex-col gap-4">
          <Grid>
            <div className="col-span-1 xs:col-span-2 sm:col-start-3 flex flex-col gap-2">
              <div className="relative">
                <HorizontalGridLine size="sm" dashed />
              </div>
              <SwitchFilterList />
              <div className="relative">
                <HorizontalGridLine size="sm" dashed />
              </div>
            </div>
          </Grid>

          <Grid>
            <div className="col-span-1 xs:col-span-2 sm:col-start-3 flex flex-col gap-2">
              <div className="relative">
                <HorizontalGridLine size="sm" dashed />
              </div>
              <FilterList />
              <div className="relative">
                <HorizontalGridLine size="sm" dashed />
              </div>
            </div>
          </Grid>

          <div className="flex flex-col gap-2">
            {/* line */}
            <div className="relative">
              <HorizontalGridLine size="sm" dashed />
            </div>
            {/* showcase */}
            <ShowcaseGrid />
            {/* line */}
            <div className="relative">
              <HorizontalGridLine size="sm" dashed />
            </div>
          </div>
        </div>
      </Container>

      {/* bottom grid lines */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <HorizontalGridLine size="sm" dashed />
        </div>
        <div className="relative">
          <HorizontalGridLine />
        </div>
      </div>
    </section>
  );
};
