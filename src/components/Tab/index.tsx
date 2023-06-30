import { Children, cloneElement, forwardRef, useState } from "react";
import {
  Container,
  Icon,
  TabHeader,
  TimeLine,
  TimelineItem,
  Text,
  TabContent,
} from "./styles";

type Props = {
  children: React.ReactElement[];
};

export const Tab = forwardRef(({ children }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = Children.map(children, (child) => {
    return cloneElement(child);
  });

  console.log(tabs)

  return (
    <Container>
      <TabHeader>
        <TimeLine>
          {tabs.map((tab, index) => (
            <TimelineItem key={tab.key} onClick={() => setCurrentTab(index)}>
              <Icon />
              <Text>{tab.props.title || ''}</Text>
            </TimelineItem>
          ))}
        </TimeLine>
      </TabHeader>
      <TabContent>{tabs[currentTab]}</TabContent>
    </Container>
  );
});
