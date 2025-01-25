import * as React from "react";
import { Accordion } from "radix-ui";
import styles from "./mobileAllMenu.module.css";
import clsx from "clsx";
import { BiChevronDown } from "react-icons/bi";

const AccordionDemo = () => (
  <Accordion.Root
    className={styles.Root}
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className={styles.Item} value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={styles.Item} value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className={styles.Item} value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={styles.Header}>
      <Accordion.Trigger
        className={clsx(styles.Trigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <BiChevronDown className={styles.Chevron} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={clsx(styles.Content, className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={styles.ContentText}>{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;
