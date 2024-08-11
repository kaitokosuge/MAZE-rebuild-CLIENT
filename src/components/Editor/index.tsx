import dynamic from "next/dynamic";
export const EditorJSForm = dynamic(
    () =>
        import(
            "@/app/(admin)/admin-create/(tab-modules)/(tab-content)/TabQuizForm"
        ),
    {
        ssr: false,
    },
);
