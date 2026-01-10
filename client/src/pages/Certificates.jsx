import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  Download,
  Share2,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react'
import Card, { CardBody } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Modal from '../components/ui/Modal'
import { useAuthStore } from '../store/authStore'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)
  const { user } = useAuthStore()

  const certificates = [
    {
      id: 1,
      track: 'Frontend Developer',
      status: 'earned',
      earnedDate: '2024-01-15',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
      credentialId: 'ZOSWA-FE-2024-001',
    },
    {
      id: 2,
      track: 'CSS Fundamentals',
      status: 'earned',
      earnedDate: '2024-01-10',
      skills: ['CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
      credentialId: 'ZOSWA-CSS-2024-001',
    },
    {
      id: 3,
      track: 'Backend Developer',
      status: 'in_progress',
      progress: 45,
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    },
    {
      id: 4,
      track: 'Full Stack Developer',
      status: 'locked',
      skills: ['Frontend', 'Backend', 'Databases', 'Deployment'],
    },
    {
      id: 5,
      track: 'DevOps & Cloud',
      status: 'locked',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    },
    {
      id: 6,
      track: 'AI Engineering',
      status: 'locked',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'LLMs'],
    },
  ]

  const earnedCerts = certificates.filter(c => c.status === 'earned')
  const inProgressCerts = certificates.filter(c => c.status === 'in_progress')
  const lockedCerts = certificates.filter(c => c.status === 'locked')

  const handleDownload = (cert) => {
    // In production, this would generate and download a PDF
    alert(`Downloading certificate for ${cert.track}`)
  }

  const handleShare = (cert) => {
    // In production, this would open a share dialog
    if (navigator.share) {
      navigator.share({
        title: `My ${cert.track} Certificate`,
        text: `I just earned my ${cert.track} certificate from Zoswa!`,
        url: `https://zoswa.com/verify/${cert.credentialId}`,
      })
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Award className="w-8 h-8 text-neon-yellow" />
          Certificates
        </h1>
        <p className="text-gray-400">
          Earn certificates by completing learning tracks. Share them on LinkedIn or add them to your resume!
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card>
          <CardBody className="p-6 text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">{earnedCerts.length}</div>
            <p className="text-gray-400">Certificates Earned</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="p-6 text-center">
            <div className="text-4xl font-bold text-neon-cyan mb-2">{inProgressCerts.length}</div>
            <p className="text-gray-400">In Progress</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody className="p-6 text-center">
            <div className="text-4xl font-bold text-gray-500 mb-2">{lockedCerts.length}</div>
            <p className="text-gray-400">Available</p>
          </CardBody>
        </Card>
      </motion.div>

      {/* Earned Certificates */}
      {earnedCerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-neon-green" />
            Earned Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earnedCerts.map((cert) => (
              <Card key={cert.id} className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-neon-cyan to-neon-purple" />
                <CardBody className="p-6">
                  {/* Certificate Preview */}
                  <div
                    className="bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl p-6 mb-4 border border-dark-600 cursor-pointer hover:border-neon-cyan/50 transition-colors"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="text-center">
                      <Award className="w-12 h-12 text-neon-yellow mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-white mb-1">{cert.track}</h3>
                      <p className="text-gray-400 text-sm mb-2">Certificate of Completion</p>
                      <p className="text-neon-cyan text-xs">{user?.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {new Date(cert.earnedDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <Badge variant="success">Earned</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-dark-600 rounded-md text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleDownload(cert)}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleShare(cert)}
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>
      )}

      {/* In Progress */}
      {inProgressCerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-neon-cyan" />
            In Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressCerts.map((cert) => (
              <Card key={cert.id} className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-neon-cyan/50 to-neon-purple/50" />
                <CardBody className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{cert.track}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-dark-600 rounded-md text-xs text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Badge variant="primary">{cert.progress}%</Badge>
                  </div>

                  <div className="mb-4">
                    <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                        initial={{ width: 0 }}
                        animate={{ width: `${cert.progress}%` }}
                      />
                    </div>
                  </div>

                  <Button className="w-full" onClick={() => window.location.href = `/tracks/${cert.track.toLowerCase().replace(' ', '')}`}>
                    Continue Learning
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>
      )}

      {/* Locked */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5 text-gray-500" />
          Available Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lockedCerts.map((cert) => (
            <Card key={cert.id} className="opacity-75">
              <CardBody className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-600 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-gray-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.track}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {cert.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-dark-600 rounded-md text-xs text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button variant="secondary" size="sm" onClick={() => window.location.href = '/tracks'}>
                    Start Track
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Certificate Preview Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title="Certificate Preview"
        size="lg"
      >
        {selectedCert && (
          <div className="text-center">
            {/* Certificate Design */}
            <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-xl p-8 border-2 border-neon-cyan/30 mb-6">
              <div className="border-2 border-neon-cyan/20 rounded-lg p-8">
                <div className="mb-6">
                  <Award className="w-16 h-16 text-neon-yellow mx-auto" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Certificate of Completion</h2>
                <p className="text-gray-400 mb-6">This is to certify that</p>
                <p className="text-2xl font-bold text-neon-cyan mb-6">{user?.name}</p>
                <p className="text-gray-400 mb-2">has successfully completed the</p>
                <p className="text-xl font-bold text-white mb-6">{selectedCert.track}</p>
                <p className="text-gray-400 text-sm mb-2">
                  Issued on {new Date(selectedCert.earnedDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-gray-500 text-xs">
                  Credential ID: {selectedCert.credentialId}
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleDownload(selectedCert)}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="secondary" onClick={() => handleShare(selectedCert)}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.open(`https://linkedin.com/sharing`, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Add to LinkedIn
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
