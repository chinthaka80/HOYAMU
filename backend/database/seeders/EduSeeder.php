<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EduSubject;
use App\Models\EduLesson;
use App\Models\EduPaper;

class EduSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Create Subjects
        $subjects = [
            [
                'name' => 'Combined Mathematics',
                'grade' => '13',
                'stream' => 'al',
                'slug' => 'combined-maths',
                'icon' => 'Calculator',
            ],
            [
                'name' => 'Physics',
                'grade' => '13',
                'stream' => 'al',
                'slug' => 'physics',
                'icon' => 'Atom',
            ],
            [
                'name' => 'Chemistry',
                'grade' => '13',
                'stream' => 'al',
                'slug' => 'chemistry',
                'icon' => 'FlaskConical',
            ],
            [
                'name' => 'Biology',
                'grade' => '13',
                'stream' => 'al',
                'slug' => 'biology',
                'icon' => 'Dna',
            ],
            [
                'name' => 'Mathematics',
                'grade' => '11',
                'stream' => 'ol',
                'slug' => 'ol-maths',
                'icon' => 'Calculator',
            ],
            [
                'name' => 'Science',
                'grade' => '11',
                'stream' => 'ol',
                'slug' => 'ol-science',
                'icon' => 'Atom',
            ],
            [
                'name' => 'Science',
                'grade' => '6',
                'stream' => 'grade-6',
                'slug' => 'g6-science',
                'icon' => 'Atom',
            ],
            [
                'name' => 'History',
                'grade' => '11',
                'stream' => 'ol',
                'slug' => 'ol-history',
                'icon' => 'GraduationCap',
            ],
        ];

        foreach ($subjects as $subj) {
            $subject = EduSubject::create($subj);

            // 2. Create sample lessons for each subject
            if ($subj['slug'] === 'combined-maths') {
                EduLesson::create([
                    'subject_id' => $subject->id,
                    'title' => 'Quadratic Equations (වර්ගජ සමීකරණ)',
                    'content' => "# Quadratic Equations (වර්ගජ සමීකරණ)\n\nThe standard form of a quadratic equation is defined as:\n\n\$\$ax^2 + bx + c = 0\$\$\n\nwhere \$a, b, c \\in \\mathbb{R}\$ and \$a \\neq 0\$.\n\n### Roots of a Quadratic Equation\n\nThe roots of the quadratic equation can be calculated using the quadratic formula:\n\n\$\$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\$\$\n\n### Discriminant (විවේචකය)\n\nThe discriminant \$\\Delta\$ determines the nature of the roots:\n\n1. If \$\\Delta = b^2 - 4ac > 0\$, the roots are real and distinct.\n2. If \$\\Delta = 0\$, the roots are real and equal.\n3. If \$\\Delta < 0\$, the roots are complex and conjugate.\n\n#### Example Question:\nSolve the equation \$x^2 - 5x + 6 = 0\$.",
                    'type' => 'theory',
                    'slug' => 'quadratic-equations',
                ]);
            } elseif ($subj['slug'] === 'physics') {
                EduLesson::create([
                    'subject_id' => $subject->id,
                    'title' => 'Newton\'s Laws of Motion (නිව්ටන්ගේ චලිත නියම)',
                    'content' => "# Newton's Laws of Motion\n\nNewton's laws of motion are three physical laws that, together, laid the foundation for classical mechanics.\n\n### First Law (Law of Inertia)\nEvery object continues in its state of rest, or of uniform velocity in a straight line, unless compelled to change that state by a net force.\n\n### Second Law (Force and Acceleration)\n\nThe acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass:\n\n\$\$F = ma\$\$\n\nwhere:\n- \$F\$ = Force (Newtons, N)\n- \$m\$ = Mass (kg)\n- \$a\$ = Acceleration (\$ms^{-2}\$)\n\n### Third Law (Action & Reaction)\nTo every action there is always an opposed equal reaction.",
                    'type' => 'theory',
                    'slug' => 'newtons-laws',
                ]);
            } elseif ($subj['slug'] === 'g6-science') {
                EduLesson::create([
                    'subject_id' => $subject->id,
                    'title' => 'Photosynthesis (ප්‍රභාසංස්ලේෂණය)',
                    'content' => "# Photosynthesis (ප්‍රභාසංස්ලේෂණය)\n\nPhotosynthesis is the process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water.\n\n### Equation of Photosynthesis:\n\n\$\$6CO_2 + 6H_2O \\xrightarrow{\\text{Sunlight, Chlorophyll}} C_6H_{12}O_6 + 6O_2\$\$\n\n### Key Components:\n- **Carbon Dioxide (CO2)**: Absorbed from the atmosphere through stomata.\n- **Water (H2O)**: Absorbed from soil via root system.\n- **Sunlight**: Captured by chlorophyll pigment in chloroplasts.",
                    'type' => 'theory',
                    'slug' => 'photosynthesis',
                ]);
            } else {
                EduLesson::create([
                    'subject_id' => $subject->id,
                    'title' => 'Introduction to ' . $subj['name'],
                    'content' => '# Introduction to ' . $subj['name'] . "\n\nThis is a sample study note for " . $subj['name'] . ' syllabus under Sri Lankan education guidelines. Complete notes will be uploaded soon.',
                    'type' => 'theory',
                    'slug' => 'intro-' . $subj['slug'],
                ]);
            }

            // 3. Create sample papers
            EduPaper::create([
                'subject_id' => $subject->id,
                'title' => $subj['name'] . ' - 2024 Past Paper',
                'year' => 2024,
                'type' => 'past_paper',
                'file_url' => 'https://www.hoyamu.net/edu/samples/pastpaper.pdf',
            ]);

            EduPaper::create([
                'subject_id' => $subject->id,
                'title' => $subj['name'] . ' - Model Paper by HOYAMU EDU',
                'year' => 2025,
                'type' => 'model_paper',
                'file_url' => 'https://www.hoyamu.net/edu/samples/modelpaper.pdf',
            ]);
        }
    }
}
