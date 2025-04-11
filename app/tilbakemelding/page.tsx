import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function Tilbakemelding() {
    return (
        <PageTemplate title="Tilbakemelding" subtitle="Vi vil gjerne høre fra deg">
            <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#f7f3e8] shadow-md">
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Vi setter pris på din tilbakemelding.
                </p>
                <Link href="https://nettskjema.no/a/501645" className="inline-block px-6 py-3 bg-buldreoransj text-[#fef6da] font-bold rounded-lg hover:bg-[#d35400] transition-colors duration-300 shadow-md">
                    Gi din tilbakemelding
                </Link>
            </div>
        </PageTemplate>
    );
}
