// TODO: turn these all into modern arrow functions
import React from 'react';

export function SectionTitle(props) {
  const { title } = props;
  return (
    <h1>{title}</h1>
  );
}

export function SectionHeading(props) {
  const { heading } = props;
  return (
    <h2>{heading}</h2>
  );
}

export function ResHeading(props) {
  const { heading } = props;
  return (
    <h2>{heading}</h2>
  );
}

export function ResSectionHeading(props) {
  const { heading } = props;
  return (
    <h3>{heading}</h3>
  );
}
