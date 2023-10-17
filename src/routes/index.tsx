import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Example } from '~/components/syndemo';
 
export default component$(() => {
  console.log('Qwik Render');

  return (
    <Example />
  );
});
/*
export default component$(() => {
  return (
    <>
      
    </>
  );
});
*/
export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
